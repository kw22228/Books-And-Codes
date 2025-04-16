from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

chat = ChatOpenAI(
    model="gpt-3.5-turbo"
)

result = chat(
    [
        SystemMessage(content="당신은 친한 친구입니다. 존댓말을 쓰지 말고 반말로 답해주세요."),
        HumanMessage(content="안녕하세요!")
    ]
)

print(result)