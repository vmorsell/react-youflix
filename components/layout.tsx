import Header from './header'
import Footer from './footer'

export interface LayoutProps {
  title: string
  copyrightFromYear: number
  publisher: string
  children: React.ReactNode
}

const Layout = ({
  title,
  copyrightFromYear,
  publisher,
  children,
}: LayoutProps): JSX.Element => (
  <>
    <Header title={title} />

    <div className="container">
      <main>{children}</main>
    </div>

    <Footer copyrightFromYear={copyrightFromYear} publisher={publisher} />
  </>
)

export default Layout
