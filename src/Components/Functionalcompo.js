/**functional Components System 
using Props;
*/


function Card3(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>
        <strong>Email: </strong>
        {props.email}
      </p>
    </>
  );
}
export default Card3;
