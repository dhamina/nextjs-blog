import Head from 'next/head'
import GooglePicker from 'react-google-picker';

export default function Home() {
  return (
    <div className="container">
       <GooglePicker clientId={'483578504246-pfg5vdptma6pf80v5sokk0kj9h73o3ad.apps.googleusercontent.com'}
      developerKey={'AIzaSyDS1llxBx5z0uOt8KjLtcjh56QTJFwl3YM'}
      scope={['https://www.googleapis.com/auth/drive.readonly']}
      onChange={data => console.log('on change:', data)}
      onAuthFailed={data => console.log('on auth failed:', data)}
      multiselect={true}
      navHidden={true}
      authImmediate={false}
      viewId={'DOCS'}
      mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
      createPicker={ (google, oauthToken) => {
        const googleViewId = google.picker.ViewId.DOCS;
        const uploadView = new google.picker.DocsUploadView();
        const docsView = new google.picker.DocsView(googleViewId)
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true);

        const picker = new window.google.picker.PickerBuilder()
        .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
          .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .addView(docsView)
            .addView(uploadView)/*DocsUploadView added*/
            .setOAuthToken(oauthToken)
            .setDeveloperKey('AIzaSyDS1llxBx5z0uOt8KjLtcjh56QTJFwl3YM')
            .setCallback((data)=>{
              if (data.action == google.picker.Action.PICKED) {
                  var fileId = data.docs[0].id;
                  alert('The user selected: ' + fileId);
                  picker();
              }
            });
        picker.build().setVisible(true);
    }}>
    <span>Click here</span>
    <div className="google"></div>
    </GooglePicker>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
