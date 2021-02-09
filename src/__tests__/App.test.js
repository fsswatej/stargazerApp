import { render, screen } from '@testing-library/react';
import App from '../App';
import { MockedProvider } from '@apollo/client/testing';

describe("<App />", () => {

    const mocks = [];
    it("should render the app correctly", () => {
        render(<MockedProvider mocks={mocks}>
            <App />
        </MockedProvider>);
        const linkElement = screen.getByText('GIT Stargazers App',
            { exact: true }
        );
        expect(linkElement).toBeInTheDocument();
    });
});
