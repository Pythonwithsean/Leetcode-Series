s = "(]"

d = {
	"{": "}",
 "(": ")",
 "[": "]"
}

stack = []
for i in range(len(s)):
  if s[i] == "[":
    stack.append(d[s[i]])
  if s[i] == "{":
    stack.append(d[s[i]])
  if s[i] == "(":
    stack.append(d[s[i]]) 
  
for x in range(0,len(s),2):
  elm = stack.pop()
  if d[s[x]] == elm:
    pass
  else: 
    print("Invalid")
    break 
  
print("Valid")  
