export default class UniqueId {

  static id = Date.now();

  /**
   * 
   * @param prefix 
   * @returns 
   */
  static next(prefix: string = '') {
    return `${prefix}${this.id++}`;
  }
}