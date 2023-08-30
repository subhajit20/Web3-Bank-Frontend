export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface Employee {
    id: number;
    name: string;
    salary: number;
  }
  interface Window {
    ethereum: any;
  }

  interface action {
    type: String;
  }

  type Person = {
    name: string;
    age: number;
  };
}
