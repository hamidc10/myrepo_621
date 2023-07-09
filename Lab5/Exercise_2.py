#Hamid Choucha
#BlazerId:hamidc
import requests
import json

#Its to grab data from url as show in video
url="https://michaelgathara.com/api/python-challenge"
response=requests.get(url)
challenges=response.json()

#Loop through list of dictionary
# First I want to  grab the items from the list then the values from the dictionary
#Used this to help with dictionary: https://www.w3schools.com/python/python_dictionaries_loop.asp
prob_num=[] #Updated list with just the problem numbers (decided not to store that array since i could use count)
prob_quest=[] #Updated list with out problem numbers
solved=[] #Updated list with ? removed
arr=[]
for i in range(0,len(challenges)):
    problems=challenges[i]
    for j in problems.values():
        arr.append(j)
   
    
    #Tried test case to ensure that it did check for ?
    # arr.append(4)
    #arr.append('5+3+4?')


#Now that I have the values I want to add it to two separate the array into one for the question
#For type casting
# https://www.geeksforgeeks.org/type-casting-in-python/
length_arr=len(arr)
for i in range(0,length_arr):
    if arr[i] == str(arr[i]):
        prob_quest.append(arr[i])

#Used eval() to help solve the problems
# https://realpython.com/python-eval-function/#:~:text=Python's%20eval()%20allows%20you,or%20a%20compiled%20code%20object.
# Used for bonus point
# https://www.w3schools.com/python/python_json.asp
# https://www.w3schools.com/python/ref_requests_post.asp
count=0
answer=[]
for i in prob_quest:
    i=i.replace("?","")
    count+=1
    solve=eval(i) 
    #answer="The answer to problem " + str(count) + " = " + str(solve)
    #solved.append(answer) # dont need to really append it now since I have changed to printing it but incase need for future 
    answer_info={"id":count,"answer":solve}
    answer.append(answer_info)
r = requests.post( url, json=answer)


#print(r.json())
#print(r.__dict__)
print(answer)
print(r.text)


#print(solved)

   

          






#### Test cases and random code used to help solve #### 
# count=0
# for i in prob_quest:
#     i=i.replace("?","")
#     count+=1
#     solve=eval(i) 
#     solved.append(solve)

#This allows me to loop through the question arr and remove the ?
# for i in list(prob_question):
#     i.replace("?","")
# for i in prob_quest:
#     i=i.replace("?","")
#     solve=eval(i) 
#     solved.append(solve)
#print(solved)
#To solve each problem


#print(prob_quest1)
#print(prob_question)
#print(prob_num)        
#print(question_arr)
#print(num)
#print(problems)