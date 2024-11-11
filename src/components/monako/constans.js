export const LANGUAGE_VERSIONS = {
	JavaScript: "18.15.0",
	TypeScript: "5.3.0",
	Python: "3.10.0",
	Java: "15.0.2",
	CSharp: "6.12.0",
	Php: "8.2.3",
};

export const CODE_SNIPPETS = {
	JavaScript: `console.log("Hello, World!");`,
	Python: `print("Hello, World!")`,
	Php: `echo "Hello, World!";`,
	Java: `public class Main {
	   public static void main(String[] args) {
		 System.out.println("Hello, World!");
	}}`,
	Cpp: `#include <iostream>
       int main() {
	     std::cout << "Hello, World!" << std::endl;
        }`,
	CSharp: `using System;
       class Program {
	static void Main() {
		Console.WriteLine("Hello, World!");
	}
}`,
	Ruby: `puts "Hello, World!"`,
	Go: `package main
import "fmt"

func main() {
	fmt.Println("Hello, World!")
}`,
	Rust: `fn main() {
	println!("Hello, World!");
}`,
};
