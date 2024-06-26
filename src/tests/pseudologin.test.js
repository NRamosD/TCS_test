import { screen, render } from '@testing-library/react';
import { PseudoLogin } from "../pages/pseudologin";


beforeEach(() => render(<PseudoLogin/>))

describe("PseudoLogin display", () =>{
    it("must display a title",() => {
    //   render(<PseudoLogin/>)
      expect(screen.queryByText(/ola/)).toBeInTheDocument();
    })


})