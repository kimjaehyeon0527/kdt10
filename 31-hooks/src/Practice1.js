import { useForm } from 'react-hook-form';

function Practice1() {
  const {
    register, //input 할당, value 변경 감지
    handleSubmit, // form submit 이벤트 시 호출
    formState: { errors }, // 폼 상태 객체(그 안에 에러 객체)
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  const onInValid = (err) => {
    console.log('onInValid', err);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <h1>실습</h1>
        <input
          type="text"
          placeholder="이름"
          {...register('이름', { required: '이름은 필수 항목 입니다.' })}
        />
        {/* 에러 메시지 */}
        {errors.이름?.message}
        <br />
        <input
          type="text"
          placeholder="나이"
          {...register('나이', {
            required: '나이를 입력해주세요',
            validate: {
              useNumber: (value) => {
                return value >= 0 || '0 이상의 숫자만 입력 가능합니다';
              },
            },
          })}
        />
        {errors.나이?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}

export default Practice1;
