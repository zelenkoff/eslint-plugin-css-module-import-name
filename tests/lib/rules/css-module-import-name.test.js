import { RuleTester } from 'eslint';
import { stripIndent } from 'common-tags';
import { cssModuleImportName } from '../../../lib';
import { test } from '../utils';

const ruleTester = new RuleTester();

ruleTester.run('css-module-import-name', cssModuleImportName, {
  valid: [
    test({ code: stripIndent`import s from "foo.module.css"` }),
    test({ code: stripIndent`import randomName from "foo.module.css"` }),
    test({ code: stripIndent`import styles from "foo.module.css"`, options: [{ validName: 'styles' }] })
  ],
  invalid: [
    test({
      code: stripIndent`import styles from "foo.module.css"`,
      output: stripIndent`import s from "foo.module.css"`,
      errors: [{ message: 'Have to use s as a name for styles object' }],
      options: [{ validName: 's', message: 'Have to use s as a name for styles object' }]
    }),
    test({
      code: stripIndent`
          import styles from "foo.module.css"

          export const ButtonComponent = () => {
              return <button className={styles.classValue}>Click me!</button>
          }
          `,
      output: stripIndent`
        import s from "foo.module.css"

        export const ButtonComponent = () => {
            return <button className={s.classValue}>Click me!</button>
        }
    `,
      options: [{ validName: 's', message: 'Have to use s as a name for styles object' }],
      errors: [
        { message: 'Have to use s as a name for styles object' },
        { message: 'Have to use s as a name for styles object' }
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    })
  ]
});
