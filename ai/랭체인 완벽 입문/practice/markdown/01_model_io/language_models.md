## language models

### 랭체인 모듈 가져오기

- from langchain.chat_models import ChatOpenAI
- 랭체인 지원 언어 모델중에 ChatGpt 모델을 가져옴
- ChatOpenAI, ChatAnthropic 등..

### 모듈의 모델 설정

- cahat = ChatOpenAI(model='gpt-3.5-turbo')
- 언어모델의 세부 모델을 지정

### Chat 모델

- 대화 형식으로 사용하는 언어모델
- 대화형 텍스트 생성, 특히 챗봇 개발에 적합
- 종류
  1.  HumanMessage
      - 사용자의 입력 메시지를 받아들이는 클래스
  2.  AIMessage
      - 언어모델의 출력을 받아들이는 클래스
  3.  SystemMessage
      - 대화를 표현하는 것이 아니라, 언어에 대한 직접적인 지시를 작성
      - 예를 들어, 언어모델의 성격이나 설정 등을 입력.

### LLMs

- OpenAI의 Complete 모델과 같은 문장의 연속을 준비하는 언어 모델
- 대화가 아닌 문장의 다음 내용을 예측한다.
- 이전 메세지의 맥락을 고려하지 않고, 하나의 프롬프트만 고려한다.
