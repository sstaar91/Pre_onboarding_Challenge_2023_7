# Pre_onboarding_Challenge_React Router 만들기

## 개요

해당 레포지토리는 원티드 프리온보딩 프론트엔드 챌린지에서 제공한 과제를 구현한 레포지토리입니다. </br>
어떠한 과정을 통해 해당 과제를 구현했는지 궁금하다면 아래 블로그 링크를 참고해주세요 </br>
[과제 구현 과정 블로그 링크](https://bluemind917.tistory.com/272)

## 과제 가이드
1. 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.
   
   ```
   `/` → `root` 페이지
   `/about` → `about` 페이지
   ```

 2. 각 페이지별로 페이지 이동하는 버튼을 만들어 버튼을 클릭하면 해당 페이지로 이동하도록 구현한다.</br>
    뒤로가기 버튼을 누르거나 앞으로 가기 버튼을 눌렀을 때 이전 페이지로 이동하도록 구현한다.

    ```
    힌트 : window.onpopstate, window.location.pathname History API(pushState)
    ```

3. 최소한의 push 기능을 가진 useRouter Hook을 작성한다.

   ```
   const { push } = useRouter();
   ```

 4. Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같다.

    ```
    ReactDOM.createRoot(container).render(
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
    );
    ```

## 결과

- Router 컴포넌트

  ```
  const Router = ({ children }: Props) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
      const handleSetPathName = () => {
        setCurrentPath(window.location.pathname);
      };

      window.addEventListener("popstate", handleSetPathName);
      return () => {
        window.removeEventListener("popstate", handleSetPathName);
      };
    }, []);

    return children.filter((ele) => ele.props.path === currentPath);
  };
  ```

- Route 컴포넌트

  ```
  const Route = ({ element }: RouteType) => {
    return <>{element}</>;
  };
  ```

- useRouter Hook

  ```
  const useRouter = () => {
    const push = (path: string) => {
      window.history.pushState({}, "", path);
      window.dispatchEvent(new PopStateEvent("popstate"));
    };

    return { push };
  };
  ```
