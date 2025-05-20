# 02 Levels


## Author
**Author**: Gloria Paita

**Email**: gloria.paita@edu-its.it

**Course**: Web Developer 2024-2026
<p>&nbsp;</p>


## Assignment
Read the following articles and write a short summary in Italian or English:
* [Compiler and Interpreter Critical Differences](https://www.spiceworks.com/tech/tech-general/articles/compiler-vs-interpreter-12-critical-differences-to-know/)
* [Levels of Programming Languages](https://thebittheories.com/levels-of-programming-languages-b6a38a68c0f2)
* **Bonus**: [Machine Language vs. Assembly Language](https://www.spiceworks.com/tech/tech-general/articles/machine-vs-assembly-language/)

<p>&nbsp;</p>

## Approach to Solution

We use programming languages in order to "feed" computers specific sets of rules (also called *algorithms* or *functions*) through which they'll know how to act whenever they receive a specific input, and what output is expected.

Programming languages can be broadly classified into three categories:

* **MACHINE LANGUAGES**: the language closest to the hardware itself (the "lowest level representation of a computer program), difficult for people to understand and work with.

  Each unique processor architecture has its own machine language, made up of a series of bits (binary digits) organized in patterns which represents the operations that can be accomplished by the computer.

  Machine language programs are directly *executable* by the CPU without requiring translation, as they are written in the processor's native "language".

<p>&nbsp;</p>

* **ASSEMBLY LANGUAGES**: these are symbolic representations of machine languages, more easily readable for humans, because the instructions aren't represented by binary patterns but instead by simple abbreviations in string format (e.g., ADD, MOV). Because of that they are the perfect bridge for operating systems to communicate with application programs and viceversa (linking the hardware to the software)

  Assembly languages are specific to each processor architecture, and in order to be executed, the code needs to be translated into machine language by an Assembler (there's a unique Assembler for each unique machine language).

  Assembly language has less rules and restrictions compared to high-level languages, which grants developers more control and freedom (but this also means that developers are required to handle more complexities.)

  Assembly is also more efficient in terms of space and time, as code written in assembly is typically denser and more compact than equivalent high-level code. 

<p>&nbsp;</p>
  
* **HIGH-LEVEL LANGUAGES**: even easier to understand and work with, because they are more similar to human language. Computers can't read these languages without some help.
  
  They require translation to machine language before execution, operation that is accomplished by either a *compiler* (which translates the code into binary before execution) or an *interpreter* (which translates the code one line at a time)

  <p>&nbsp;</p>

  * **COMPILERS**: convert the whole source code to object code, save it as an executable file. Compilers are executed through the CLI. Errors are pointed out after the compiler finishes reading line by line the source code. If there are errors, the compiler won't produce an executable file.

    High level languages are converted ("compiled") into binary/machine language (sometimes there's an intermediate phase where the high level language is transformed into Assembly language and *then* into binary code), which is the only language that can be wholly understood by computers.

    This is how it works:
    First, a programmer creates the *source code* in a text editor, then the source code is passed to the *preprocessor* that alters/adds extra code necessary for the *compiler*, which will translate the code into Assembly language (depending on the programming language used, this step is skippable) to be converted into *object code* (a binary file) by an assembler. If the program uses code from external functions/files (e.g. libraries), those files will be merged with the object code through an operation called *linking* (performed by a *linker*). Finally, the linker creates the *executable file* (e.g. .exe) that will be able to be run by the computer.

    Popular compiled languages are C, C++, Rust.

    Compiled code runs faster than interpreted code, doesn't require interpreters or third-party applications to run, is better optimized for the intended machine, and is more secure.

    On the other hand, compiled programs are more prone to compatibility issues (since the code is optimized for the system on which it was intended to be executed), consume more memory, and when debugging, compilers return all errors at once after examining every line of the program, which can make it harder on the developer to locate and fix each bug.

    Compiled programs are ideal for a production environment because they are faster, can be run without the help of third party programs or interpreters, and aren't meant to be altered anymore.

    In order to produce an executable file from a source code, different compilers are needed for different operating systems.

  <p>&nbsp;</p>

  * **INTERPRETERS**: transform and run the source code line by line (without saving it) and detect errors as they do so. Errors in interpreted languages are detected at runtime, meaning they may not be caught until execution. If an interpreter is used for a web-based application, users might encounter errors while interacting with it.

    This is how it works:
    The developer creates the *source code*. An *interpreter* translates the source code into machine-level language, while at the same time allowing assessment and modification of the source code throughout the whole execution. All the linking is done at runtime.  

    Popular interpreted languages are Python, JavaScript, Perl.

    Contrary to compiled programs, interpreted programs can run on any machine (as long as the source code has been shared with them) without incurring in incompatibility problems.
    Interpreters require less memory and detect errors as they read the code sequentially, interrupting the execution of the file until the problem is resolved (which makes it simple for developers to locate bugs).
    If one has access to the source code, they can easily rectify/alter the code.

    Some of the cons of interpreted languages are that interpreters are slower than compilers, because they need to perform more operations (scanning, analysing, transforming) on each line of code; that in order to execute the source code one needs to have an interpreted installed on their machine, and that the source code, since it needs to be shared in order to be used, is less secure and safe from external attacks.

    Interpreters are ideal for a software development envinroment due to their flexibility, ease of debugging, and quick iteration. 

    Compared to compiled code, interpreted code needs to be tested and debugged until the developer is sure that there aren't bugs or mistakes. That's because interpreters are more lax due to how they are built, they can let some mistakes go.


