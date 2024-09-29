/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 11:38:20
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 11:55:23
 * @FilePath: \cz.config.js
 */
export default {
  types: [
    { value: 'feat', name: 'feat:     新增功能 | A new feature' },
    { value: 'fix', name: 'fix:      修复缺陷 | A bug fix' },
    { value: 'docs', name: 'docs:     文档更新 | Documentation only changes' },
    { value: 'style', name: 'style:    代码格式 | Changes that do not affect the meaning of the code' },
    { value: 'refactor', name: 'refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature' },
    { value: 'perf', name: 'perf:     性能提升 | A code change that improves performance' },
    { value: 'test', name: 'test:     测试相关 | Adding missing tests or correcting existing tests' },
    { value: 'build', name: 'build:    构建相关 | Changes that affect the build system or external dependencies' },
    { value: 'ci', name: 'ci:       持续集成 | Changes to our CI configuration files and scripts' },
    { value: 'revert', name: 'revert:   回退代码 | Revert to a commit' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动 | Other changes that do not modify src or test files' },
  ],
  scopes: [
    { name: 'api' },
    { name: 'views' },
    { name: 'utils' },
    { name: 'router' },
    { name: 'store' },
    { name: 'components' }
  ],
  // 交互提示的信息

  messages: {
    type: '选择你要提交的类型 :',
    scope: '选择一个提交范围（可选）:',
    customScope: '请输入自定义的提交范围 :',
    subject: '填写简短精炼的变更描述 :\n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
    breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
    footerPrefixesSelect: '选择关联issue前缀（可选）:',
    customFooterPrefix: '输入自定义issue前缀 :',
    footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
    confirmCommit: '是否提交或修改commit ?'
  },
  allowCustomScopes: true
}
