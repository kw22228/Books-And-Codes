from langchain.llms import GPT4All

llm = GPT4All(
    model="gpt-3.5-turbo-instruct"
)

result = llm(
    "맛있는 라면을",
    stop="."
)

print(result)