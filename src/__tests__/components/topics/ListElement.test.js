import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import ListElement from '../../../components/topics/ListElement';


describe('<ListElement />', () => {
      afterEach(cleanup);
      it('should display the list item', () => {
            render(
                  <ListElement
                        topic={{
                              name: 'listName',
                              stargazerCount: 111,
                        }}
                        iterator='0'
                  />
            );
            const listItem = screen.getByTestId('topicName0');
            expect(listItem).toBeInTheDocument();
      });

      
      it('should check for the button and be able to click it', () => {
            const spyOnClick = jest.fn();
            const listItem = render(
                  <ListElement
                        topic={{
                              name: 'listName',
                              stargazerCount: 111,
                        }}
                        onClick={spyOnClick}
                        iterator='0'
                  />
            );
            const clickListItem = listItem.getByTestId('topicName0');
            fireEvent.click(clickListItem);
            expect(spyOnClick).toBeCalled();
      });
});
