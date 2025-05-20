# 01 Languages



# Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026

<p>&nbsp;</p>


# Assignment

1. Make a list of all the programming languages that you know
2. Classify the languages into the groups: compiled, interpreted, other
3. For each language, explain why it is compile, interpreted or other
4. Try to find additional programming languages and add them to the list

<p>&nbsp;</p>

# Approach to Solution

## 1. List of Programming Languages I Know *of*
* Python
* JavaScript (and TypeScript)
* Java
* C
* C++
* C#
* SQL
* PHP
* Assembly

<p>&nbsp;</p>

## 2. Classify Them Into The Following Groups:
(*Although a programming language shouldn't be categorized as solely interpreted or compiled, since these processes depend on how the language is implemented rather than them being inherent properties of the language.*)

**COMPILED**

* C
* C++
* C#
* Java
* Assembly


**INTERPRETED**

* Python
* PHP
* JavaScript


**OTHER**
* TypeScript
* SQL

<p>&nbsp;</p>

## 3. Explanation

**COMPILED**

These languages are usually faster and more efficient at runtime (since the code is translated into machine code before being executed, during the compilation phase). The generated binary code is tailored to a specific platform/target machine.

* **C**: compiled to machine code.

* **C++**: compiled to machine code.

* **C#**:  compiled to Intermediate Language (IL), then JIT-compiled at runtime by the CLR (Common Language Runtime).

* **Java**: it uses a two-step compilation process. The code is first compiled into bytecode by the Java compiler, then it's executed by a Java Virtual Machine using a technique called Just-in-Time-compilation. The bytecode is compiled to native instructions which is understood by hardware CPU at runtime.

* **Assembly**: the code is translated into machine code by an assembler, then it's executed by the computer's hardware.

<p>&nbsp;</p>

**INTERPRETED**

These languages offer more flexibility during development. Interpreters read a program line by line and execute each command as it's being read. Interpreted languages tend to be slower than compiled languages, but are more portable, and it's faster to edit the code.

* **Python**: Python is predominantly considered an interpreted language, yet Python code is compiled to bytecode which is then interpreted by the Python virtual machine (PVM). However, it still operates differently from traditional compiled languages such as C or Java.

* **PHP**: when you request a webpage, the code is executed by a PHP interpreter on the server. The server processes the code directly.

* **JavaScript**: JavaScript is generally considered an interpreted language, but modern browsers use Just-In-Time (JIT) compilation for performance optimization.

<p>&nbsp;</p>

**OTHER**

* **TypeScript**: in order for the code to be run it must first be compiled into JavaScript (which is another *high-level* language). It's unusual because usually either the code needs to be compiled down to a lower-level language, or can run in an interpreter. Due to that, TypeScript is considered a *transpiled language* (a transpiler is a specific type of compiler, though, so TypeScript could technically be assumed to be a compiled language.)

* **SQL**: it's a *query language* used to interact with databases, and this isn't considered to be an interpreted or compiled programming language. SQL is a declarative language; it tells the database what to do, but it's the database engine that figures out how to do it. The code is processed directly by the database engine when executed.

<p>&nbsp;</p>

## 4. Additional Languages

* **Ruby**: it's primarely an **interpreted** language. The code is executed directly by the Ruby interpreter (either MRI (Matz's Ruby Interpreter) or JRuby (for running Ruby on the JVM)).

* **Swift**: it's a **compiled** language. Swift code is compiled *directly* to machine code through the Swift Compiler (swiftc).

* **Go**: another **compiled** language, directly compiled to machine code.

* **Perl**: considered to be an **interpreted** language (Perl Interpreter).

* **Rust**: a compiled language. Rust is compiled directly to machine code by its compiler (rustc). Rust focuses on memory safety without needing a garbage collector, which makes it highly efficient.