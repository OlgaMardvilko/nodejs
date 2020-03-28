# Caesar cipher CLI tool

## Description

CLI tool that encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)

## Usage cli
```
node index [options]

CLI tool accept 4 options (short alias and full name):
Options:
  -s, --shift <num>             a shift
  -a, --action <action>         an action encode/decode
  -i, --input <filename>        an input file
  -o, --output <filename>       an output file

Action (encode/decode) and the shift are required

Use Ctrl+C to exit from application

```

**Usage example:**

```bash
$ node index -s 7 -a encode
```

```bash
$ node index -s 5 -a decode
```

```bash
$ node index -s 12 -a encode -i plain.txt
```

```bash
$ node index -s 9 -a encode -o encoded.txt
```

```bash
$ node index -s 3 -a decode -i plain.txt -o encoded.txt
```