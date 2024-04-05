interface ObjInterface<T> {
  // A property representing the key, which is of type string
  key: string;

  // A property representing the value, which is of generic type T
  value: T;

  // A method that will return a boolean indicating if the object is valid
  isValid(): boolean;

  // A method that will return a string representation of the object
  toString(): string;
}
