class ReglaException extends Error {
    constructor(message) {
      super(message);
      this.name = "ReglaException";
    }
  }