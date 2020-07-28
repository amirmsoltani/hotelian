class IF {


  protected response: any;

  public get RES(): any {
    const res = this.response;
    this.response = null;
    return res;
  }

  public get OR(): object {
    const res = this.response ? this.response : {};
    this.response = null;
    return res;
  }

  O(condition: boolean, object: object): this {
    if (condition && !this.response)
      this.response = object;
    return this;
  }

  IF(condition: boolean, callback: Function): this {
    if (condition && !this.response)
      this.response = callback();
    return this;
  }

  IFP<T>(condition: boolean, item: T, resolve: ((item: T) => any)): this {
    if (condition && !this.response && item)
      this.response = resolve(item);
    return this;
  }

  ELSE(callback: Function): this {
    if (!this.response)
      this.response = callback();
    return this;
  }


}

export default new IF();
