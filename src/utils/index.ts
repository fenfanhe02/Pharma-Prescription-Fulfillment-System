const roleConvert = (role: number) => {
  switch (role) {
    case 1:
      return '管理员'
    case 0:
      return '普通用户'
    default:
      return '未知'
  }
}

export {
  roleConvert,
}