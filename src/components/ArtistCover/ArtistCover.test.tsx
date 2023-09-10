import ArtistCover, { ArtistCoverProps } from "./ArtistCover";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer"


describe('ArtistCover', () => {

    const mockData:ArtistCoverProps = {
        name: "Test Artist",
        nb_fan: 123,
        picture_medium: "test-image-url.jpg"
    }

    it('should render skeleton loading if loading', () => {
        render(<ArtistCover loading />)

        expect(screen.getByTestId("loader")).toBeInTheDocument()
    })

    it('should render mock details', () => {
        render(<ArtistCover loading={false} data={mockData} />)

        expect(screen.getByText(mockData.name)).toBeInTheDocument()
        expect(screen.getByText('123')).toBeInTheDocument()
        expect(screen.getByText('Fans')).toBeInTheDocument()
        expect(screen.getByText('Fans')).toContainHTML('<b>123</b> Fans')
        expect(screen.getByTestId("artistCover")).toHaveStyle(`background-image: url(${mockData.picture_medium})`)
    })

    it('should render correctly with data', () => {
        const tree = renderer.create(
            <ArtistCover data={mockData} loading={false} />
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })

    it('should render correctly while loading', () => {
        const tree = renderer.create(
            <ArtistCover loading />
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })
})