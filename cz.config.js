/*
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-09-29 11:38:20
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-09-29 11:38:50
 * @FilePath: \cz.config.js
 */
export default {
  types: [
    {
      value: 'feat',
      name: 'feat: 添加新特性'
    },
    {
      value: 'fix',
      name: 'fix: 修复问题'
    },
    {
      value: 'docs',
      name: 'docs: 文档变更'
    },
    {
      value: 'style',
      name: 'style: 代码格式（不影响功能的代码改动）'
    },
    {
      value: 'refactor',
      name: 'refactor: 重构代码（既不修复错误也不添加新功能的代码修改）'
    },
    {
      value: 'chore',
      name: 'chore: 构建过程或辅助工具的变动'
    },
    { value: 'build', name: 'build: 打包' }
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
    type: '选择一种你的提交类型:',
    scope: '\n选择一个scope (可选):',
    customScope: '请输入自定义的scope:\n',
    subject: '填写简短精炼的变更描述:\n',
    body: '填写更加详细的变更描述 (可选). 使用 "|" 分隔新行:\n',
    breaking: '列出 BREAKING CHANGES (可选):\n',
    footer: '关联关闭的 issues，例如：#31, #34(可选):\n',
    confirmCommit: '确认提交?'
  },
  allowCustomScopes: true
}
