/*
3w - move forward three words
shift b - moves you back one word (ignores punctuation)
b - moves you back one word (treates punctuation as word boundaries)
shift w - moves you forward one word (ignores punctuation)
e - go to end of given word

ea - insert at the end of a word
bi - insert at the beginning of a word
kI - insert at the beginning of the line above
jI - insert at the beginning of the line below
A - insert at the end of the line
        
v0 - highlight to the very beginning of line.
v_ - highlight to first char of line.
v$ - highlight to the end of the line
bve / ve - highlight word

H - top of the screen (way to get approximately where you want to go)
M - middle of the screen
L - bottom of screen
ctrl u - page up
ctrl d - page down
zt - redraws cursor line to top of the window
zb - redraws cursor line to the bottom of the window

shift [] to empty line up/down
[[ ]] - top of the file / bottom of the file

* - find next token/word under cursor
# - find previous token/word under cursor

0 - jump to beginning of line
_ - goes to first character of line (same as ^)
$ - place cursor at the end of the line
g_ - place cursor at the last character in line

% - go to the next corresponding ( { [
* - go the next occurrence of the word under the cursor (shift N for previous)

/word - search for 'word' forwards
?word - search for 'word' backwards
n - go to next match
N (shift n) - goes in the reverse direction of n
:nohls - removes the highlights until the next search

. repeats the previous command; helps when you don't know how many commands you want
pattern: search for word, cw, type new word, n, go to next word . 

x - delete letter under cursor
s - delete char under cursor, enter insert mode
dl - same thing as x
dh - deletes char to left of cursor

d0 - delete to the beginning of the line
d$ - delete to the end of the line
dj - deletes the current line and the one below it (good alternative to 2dd)
  i.e. d2j - good for deleting functions containing only one statement
dk - deletes the current line and the one above it

d shift g - deletes from current position to the end of the line
d t 'char' - deletes everything before character 'char'

shift x - deletes letter to the left of your cursor

'num' gg - go to line number 'num'
'num' G - go to line number 'num'
gg - go to very beginning of file
G - go to very last line of the file

dw - to delete a word, depends on where your cursor is
dd - delete the line you're on
3dd - delete three lines

: 'num' - go to line number num
:$ - jump to the end of the file

shift a - jumps to end of line and goes to insert mode
shift i - goes to the first non blank character in the line and goes to insert mode
a - appends text after the current cursor position
i - appends text before the current cursor position

o - insert a new line after the current one
O - insert a new line before the current one

80 I * escape - creates 80 asterisks
5 o # esc - creates 5 pounds sign rows under your cursor

shift r - replace mode; types over words
r - lets you replace one character, then placed back into normal mode
C - delete the rest of the line, go to insert mode
cw - delete word while being put into insert mode
c$ - delete from cursor to end of the line, places us into insert mode
c0 - delete from cursor to beginning of the line, places us into insert mode
d$ - deletes text to end of the line
ct - delete up to character

cc - delete line, insert mode
~ - changes case of the char under the cursor
g~w - replaces case of entire word
gUw - makes entire word uppercase
guw - make word lowercase

: s / word/ newword - change first occurrence of word on line with newword
: s / word / newword / g - replace all occurrences of word on line with newword
: % s / word / newword - replace every line with first instance of 'word'
: % s/ word / newword / g - global substitution
shift j - removes line underneath current 
3 shift j - removes three lines underneath current

'num' h/j/k/l - jump left/down/up/right num number of spaces

normal mode - the mode we can navigate around the file and manipulate text
insert mode - i, the mode we use to insert text

esc - returns you to normal mode

ctrl v - block selection (i.e. ctrl v, jjj (for 3 lines of text), shift i // escape)

f 'let' - find next of occurrence of letter 'let', will continue with ; (on multiple lines with shift N)
returns to previous occurrence with ,
t 'let' - go a space before the occurrence of letter 'let'
shift t / f - like f and t but backwards

dt 'char' - delete everything up until the character 'char' (i.e. dt")

J - join all lines together

visual mode - v
visual line mode - shift v

dd - delete a line
shift d - shift line but preserve line space
d5w - delete five words

c3j - delete three lines down and go into insert mode

Action Location Context - vim commands are built up in three parts, an action, a location and a second location to access context

ciw - cut the current word
ci{} - cut text in a function
ci() - cut text within parens
ci" - cut text within quotes

dab - delete around brackets

yw - copy a word (cursor at first letter)
yaw - copy a word (cursor at any position in word)
2yw - copy two words
yy - copies an entire line
yyp - copy and paste an entire line

u - undo last change
ctrl r - redo last change

esc v, select line/block, > - indents selected lines
esc v, select line/block, < - unindents selected lines
V> - indent line
V< - unindent line

*/