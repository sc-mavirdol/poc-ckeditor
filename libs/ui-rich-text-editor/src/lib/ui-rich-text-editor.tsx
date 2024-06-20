import { CKEditor } from '@ckeditor/ckeditor5-react';
import { CustomCkeditor } from './ckeditor';

export function ScCKEditor() {
  return (
    <CKEditor
      editor={CustomCkeditor}
      data="<p>Hello from CKEditor&nbsp;5!</p>"
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
      }}
      onChange={(event) => {
        console.log(event);
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
    />
  );
}
