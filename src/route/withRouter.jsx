import React from 'react';
import { useParams } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

export default withRouter;

/*  
    * 這段程式碼是使用 React 模組，在其中引入了 `useParams` 函式從 `react-router-dom` 模組中。
    * 這段程式碼定義了一個名稱為 `withRouter` 的函式，其接受一個被包裝的元件 `WrappedComponent`，並回傳另一個函式，
    * 這個函式接受 `props` 參數，並呼叫 `useParams` 函式取得目前頁面的網址參數，最後回傳一個包含 `params` 物件於 `WrappedComponent` 的元件。
    * 整體來說，這個 `withRouter` 函式用於將網址參數傳遞給被包裝的元件。
*/