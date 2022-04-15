import {withUrqlClient} from 'next-urql';

const MyApp = ({Component, pageProps}) => {
    let children = <Component/>;

    if (typeof Component.getLayout !== `undefined`)
      children = Component.getLayout({children});
  
    return <>
        {children}
    </>;
};

export default withUrqlClient((ssrExchange, ctx) => ({
    url: `https://foo`,
    exchanges: [ssrExchange],
    suspense: true,
    fetchOptions: ctx?.req ? {
        headers: {
            Cookie: `${ctx?.req.headers.cookie}`,
        },
    } : {},
}), {ssr: true})(MyApp);
