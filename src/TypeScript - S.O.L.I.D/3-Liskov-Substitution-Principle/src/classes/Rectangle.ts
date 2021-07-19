abstract class Rectangle {
  protected m_height = 0;
  protected m_width = 0;

  public setWidth(width: number): void {
    this.m_width = width;
  }

  public setHeight(height: number): void {
    this.m_height = height;
  }

  public getWidth(): number {
    return this.m_width;
  }

  public getHeight(): number {
    return this.m_height;
  }

  public getArea(): number {
    return this.m_width * this.m_height;
  }
}

class Square extends Rectangle {
  public setWidth(width: number): void {
    this.m_width = width;
    this.m_height = width;
  }

  public setHeight(height: number): void {
    this.m_height = height;
    this.m_width = height;
  }
}

export { Rectangle, Square };
