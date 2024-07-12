import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <h1>UI の記述</h1>
      {/* page 作成したらにURLを追加していく */}
      <ul>
        <li>
          <a href='/your-first-component'>初めてのコンポーネント</a>
        </li>
        <li>
          <a href='/writing-markup-with-jsx'>JSX でマークアップを記述する</a>
        </li>
        <li>
          <a href='/javascript-in-jsx-with-curly-braces'>
            JSX に波括弧で JavaScript を含める
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
