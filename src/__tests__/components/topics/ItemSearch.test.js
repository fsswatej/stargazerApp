import { render, fireEvent } from '@testing-library/react';
import ItemSearch from '../../../components/topics/ItemSearch';

describe('<ItemSearch />', () => {

      it('should change the input value', () => {
            const onChangeSpy = jest.fn();
            const searchInput = render(
                  <ItemSearch
                        input=""
                        setInputValue={onChangeSpy}
                  />
            );
            const inputField = searchInput.getByPlaceholderText('Search for a topic');
            expect(inputField).toBeInTheDocument();
            fireEvent.change(inputField, { target: { value: '23' } });
            expect(onChangeSpy).toBeCalled();
      });

});