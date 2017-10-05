// w - forward one word
// 3w - move forward three words
// shift b - moves you back one word (ignores punctuation)
// b - moves you back one word (treates punctuation as word boundaries)
// shift w - moves you forward one word (ignores punctuation)
// e - go to end of given word 

// 0 - jump to beginning of line
// shift 6 - goes to first non blank character of line
// $ - place cursor at the end of the line
// g_ - place cursor at the last character in line

// % - go to the next corresponding ( { [
// * - go the next occurrence of the word under the cursor (shift N for previous)

// '/' 'word' - forward slash then the word you a looking for (to search forwards)
// ? 'word' - to search backwards
// n to go to next match
// shift n - goes in the reverse direction of n
// :nohls - removes the highlights until the next search

// . repeats the previous command; helps when you don't know how many commands you want
// pattern: search for word, cw, type new word, n, go to next word . 

// x - deletes letter under your cursor
// dl - does the same thing as x
// dh - deletes character to the left of the cursor

// dj - deletes the current line and the one below it
// dk - deletes the current line and the one above it
// d0 - deletes from cursor to the beginning of the line
// d$ - deletes from cursor to the end of the line   
// d shift g - deletes from current position to the end of the line
// d t 'char' - deletes everything before character 'char'

// shift x - deletes letter to the left of your cursor

// 'num' gg - go to line number num
// 'num' G - go to line number num
// gg - go to very beginning of file
// G - go to very last line of the file

// dw - to delete a word, depends on where your cursor is
// dd - delete the line you're on
// 3dd - delete three lines

// : 'num' - go to line number num
// :$ - jump to the end of the file

// shift a - jumps to end of line and goes to insert mode
// shift i - goes to the first non blank character in the line and goes to insert mode
// a - appends text after the current cursor position

// o - insert a new line after the current one
// O - insert a new line before the current one

// 80 shift i * escape - creates 80 asterisks
// 5 o # esc - creates 5 pounds sign rows under your cursor

// shift r - replace mode; types over words
// r - lets you replace one character, then placed back into normal mode
// cw - delete word while being put into insert mode
// c$ - delete from cursor to end of the line, places us into insert mode
// c0 - delete from cursor to beginning of the line, places us into insert mode
// d$ - deletes text to end of the line

// cc - allows us to delete entire line of text, places in insert mode
// ~ - changes case of the letter under the cursor
// g~w - replaces case of entire word
// g shift U w - makes entire word uppercase

// : s / 'word'/ 'newword' - change first occurrence of word on line with newword
// : s / 'word' / 'newword' / g - replace all occurrences of word on line with newword
// : % s / 'word' / 'newword' - replace every line with first instance of 'word'
// : % s/ 'word' / 'newword' / g - global substitution

// shift j - removes line underneath current 
// 3 shift j - removes three lines underneath current

// d t 'let' to delete everything up until the letter 'let'

// 'num' h/j/k/l - jump left/down/up/right num number of spaces

// normal mode - the mode we can navigate around the file and manipulate text
// insert mode - i, the mode we use to insert text

// esc - returns you to normal mode

// ctrl v - block selection (i.e. ctrl v, jjj (for 3 lines of text), shift i // escape)

// f 'let' - find next of occurrence of letter 'let', will continue with ; (on multiple lines with shift N)
// returns to previous occurrence with ,
// t 'let' - go a space before the occurrence of letter 'let'
// shift t / f - like f and t but backwards

// dt 'char' - delete everything up until the character 'char' (i.e. dt")

// shift j - join all lines together

// visual mode - v
// visual line mode - shift v

// stay in normal mode as long as possible

// dd - delete a line
// shift d - shift line but preserve line space

// d5w - delete five words

// c3j - delete three lines down and go into insert mode

// Action Location Context - vim commands are built up in three parts, an action, a location
// and a second location to access context

// ci} - deletes text in a function

// d - copy with deletion
// y - copy or 'yank' the text without deleting
// p - to paste text after current position
// P - paste before

// dd - behaves the same as cut

// ctrl f - page up
// ctrl b - page down

// z enter - keeps cursor in same place, moves file up

// dd p - swap lines
// x p - swap letters/chars
// de e p - swap words

// y w - copy a word
// 2 y w - copy two words
// y y - copies an entire line
// y y p - copy and paste an entire line

// u - undo last change
// ctrl r - redo last change

// esc v, select line/block, > - indents selected lines
// esc v, select line/block, < - unindents selected lines