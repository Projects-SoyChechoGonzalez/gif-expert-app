import {GifItem} from './GifItem';
import {useFetchGifs} from '../Hooks/useFetchGifs';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {
	
	const {images, isLoading} = useFetchGifs(category);
	console.log({isLoading});
	
	return (
		<>
			<h3>{category}</h3>
			{
				isLoading && (<h2>Cargando...</h2>)
			}
			<div className='card-grid'>
				{
					images.map((image) => {
						return (
							<GifItem
								key={image.id}
								{...image}
							/>
						);
					})
				}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
export {GifGrid};