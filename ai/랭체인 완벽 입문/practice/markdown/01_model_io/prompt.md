## Prompts

- 말그대로 프롬프트에 해당하는 모듈
- 사용자가 입력한 텍스트를 언어모델에 전달하기 전에 텍스트를 처리하는 역할을 한다.

### 모듈 종류

1. PromptTemplate

   - input_variables로 template에 받을 변수를 지정해준다.
   - 프롬프트의 템플릿을 지정하고 해당 템플릿에 지정해주는 변수에 따라 텍스트 생성을 달리한다.
   - PromptTemplate은 단순히 Template에 변수를 집어넣은 문자열을 배출한다.
     그렇기 때문에 promptTemplate의 문자열을 가져와서 language model에 전달해야한다.

   - 메소드
     - prompt.foramt : template에 변수를 집어넣은 문자열을 반환한다.
     - prompt.save : template을 json으로 변환하여 파일로 저장한다.
     - prompt.load : json 파일을 불러와 template을 생성한다.
