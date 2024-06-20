import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';

export class CustomCkeditor extends ClassicEditor {
  // Plugins to include in the build.
  public static override builtinPlugins = [Bold, Essentials, Italic, Paragraph];

  public static override defaultConfig = {
    toolbar: {
      items: ['bold', 'italic', 'outdent', 'indent', '|', 'undo', 'redo'],
    },
    language: 'en',
  };
}
