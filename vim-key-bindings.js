// w - forward one word
// 3w - move forward three words
// shift b - moves you back one word (ignores punctuation)
// b - moves you back one word (treates punctuation as word boundaries)
// shift w - moves you forward one word (ignores punctuation)

// 0 - jump to beginning of line
// $ - place cursor at the end of the line

// '/' 'word' - forward slash then the word you a looking for
// n to go to next match
// shift n - goes in the reverse direction of n
// :nohls - removes the highlights until the next search

// . repeats the previous command; helps when you don't know how many commands you want
// pattern: search for word, cw, type new word, n, go to next word . 

// x - deletes letter under your cursor
// dl - does the same thing as x

// dk - deletes the current line and the one above it
// d0 - deletes to the beginning of the line
// d$ - delete to the end of the line
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

// o - creates new line beneath cursor and puts you insert mode


// 80 shift i * - creates 80 asterisks
// 5 o # esc - creates 5 pounds sign rows under your cursor

// shift r - replace mode; types over words
// r - lets you replace one character, then placed back into normal mode
// cw - delete word while being put into insert mode
// c$ - delete from word to end of the line, places us into insert mode
// d$ - deletes text to end of the line

// cc - allows us to delete entire line of text, places in insert mode
// ~ - changes case of the letter under the cursor
// g~w - replaces case of entire word
// g shift U w - makes entire word uppercase

// shift J - removes line underneath current 
// 3 shift J - removes three lines underneath current

// d t 'let' to delete everything up until the letter 'let'


// 'num' h/j/k/l - jump left/down/up/right num number of spaces

// normal mode - the mode we can navigate around the file and manipulate text
// insert mode - i, the mode we use to insert text

// esc - returns you to normal mode

// f 'let' - find next of occurrence of letter 'let', will continue with ;
// returns to previous occurrence with ,

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

// y - copy or 'yank' the text
// p - to paste text

// dd - behaves the same as cut

// ctrl f - page up
// ctrl b - page down

// z enter - keeps cursor in same place, moves file up

// dd p - swap lines
// x p - swap letters
// y w - copy a word
// 2 y w - copy two words
// y y - copies an entire line
// y y p - copy and paste an entire line

// u - undo last change
// ctrl r - redo last change