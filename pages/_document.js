// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	
	
	render() {

		return (
			<Html lang="en">
				<Head>
					<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
					<meta name="theme-color" content="#000000" />
					
					<style dangerouslySetInnerHTML={{
						__html: `
						* { -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
						img { max-width: 100% }
						// body { overflow-x: hidden; font: 14px/14px hind; color: #D55C61; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; }	
                        body
{
    padding:10px;
    background-color: #D55C61; /* The page background will be black */
    color: white; /* The page text will be white */
}
                        `
					}

					}></style>

				</Head>
				<body>
					
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<Main />
					
					<NextScript />
					<>
					
					</>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
