import { render, cleanup, act, fireEvent } from '@testing-library/react';
import ListComponent from '../../../components/topics/ListComponent';

const topics = [
      {
            topic: {
                  name: 'parentList',
                  stargazerCount: 111,
                  relatedTopics: [
                        {
                              name: 'childList0',
                              stargazerCount: 222,
                        },
                        {
                              name: 'childList1',
                              stargazerCount: 333,
                        },
                  ],
            },
      },
];


const relatedTopics = [{
      name: 'relatedName',
      stargazerCount: 444,
}];

describe('<ListComponent />', () => {

      afterEach(cleanup);

      it('should render loader when fetching data', () => {
            const { getByTestId } = render(
                  <ListComponent list={[]} isLoading={true} />
            );
            const circularLoader = getByTestId('circular-progress');
            expect(circularLoader).toBeInTheDocument();

      });

      it('should display error when there is an exception', () => {
            const { getByText } = render(
                  <ListComponent list={[]} hasError="Error in loading data" />
            );
            const errorMessage = getByText('There is an error while fetching data: Error in loading data');
            expect(errorMessage).toBeInTheDocument();

      });

      it('should display message when the list is empty', () => {
            const { getByTestId } = render(
                  <ListComponent list={[]} />
            );
            const emptyList = getByTestId('empty-list');
            expect(emptyList).toBeInTheDocument();

      });


      describe('list component onClick related and original', () => {

            afterEach(cleanup);

            it('should render list when isRelated is false', async () => {
                  await act(async () => {
                        const { getByText } = render(
                              <ListComponent list={topics} />
                        );
                        const relatedList = getByText('parentList');
                        expect(relatedList).toBeInTheDocument();
                  });
            });


            test('should render trigger onTopicSelect handler on item click', () => {
                  const onClickSpy = jest.fn();
                  const { getByRole } = render(
                        <ListComponent
                              list={topics}
                              onClickTopic={onClickSpy}
                        />
                  );
                  const originalListButton = getByRole('button');
                  fireEvent.click(originalListButton);
                  expect(onClickSpy).toBeCalled();
            });

            test('should render list when isRelated is true', async () => {
                  await act(async () => {
                        const { getByTestId } = render(
                              <ListComponent list={relatedTopics} isRelatedTopic />
                        );
                        const originalList = getByTestId('topicName0');
                        expect(originalList).toBeInTheDocument();
                  });
            });
      })
});


