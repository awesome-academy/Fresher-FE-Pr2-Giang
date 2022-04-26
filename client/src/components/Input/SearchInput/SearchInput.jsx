import './styles.scss';

const SearchInput = () => {
  return (
    <form className='search-input'>
      <input type='text'></input>
      <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
  )
};

export default SearchInput;
