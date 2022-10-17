import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang="en" className="">
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" />
                </Head>
                <body className="bg-white dark:bg-[#0B0D13] duration-300 ease-in-out">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;
