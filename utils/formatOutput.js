class Success {
  constructor(data) {
    (this.status = "ok"),
      (this.data = data),
      (this.success = true),
      (this.messege = "thanks for visiting");
  }
}

class Failure {
  constructor(errorMessege) {
    (this.status = "not ok"),
      (this.data = null),
      (this.success = false),
      (this.messege = errorMessege);
  }
}

module.exports = { Success, Failure };
