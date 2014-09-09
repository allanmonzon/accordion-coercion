

				  number      boolean     string 	

undefined			NaN		   false      "undefined" 
null                 0         false      "null"
true                 1         true  	  "true"   
false				 0         false      "false"
""					 0		   false	  ""
"1.2"               1.2        true       "1.2"
"one"               NaN        true       "one"
0                    0         false      "0"
-0                  -0         false      "0"
NaN                 NaN        false      "NaN"
Infinity          Infinity     true       "Infinity "
-Infinity        -Infinity     true       "-Infinity "
1                    1         true       "1"
{}                  NaN        true        0
[]                   0         true       ""
[12]                12         true       "12"
['something']       NaN        true       "something" 
function(){}        NaN        true       SyntaxError: 


