const Footer = (props) => (
  <div>
    <span>Made with ♥ by <a href="https://twitter.com/_JuanGallo" target="_blank">Juani Gallo</a></span>
    <style jsx>{`
      div {
        text-align: center;
        color: #333;
        position: fixed;
        bottom: 30px;;
        margin: auto;
        width: 100%;
      }
      span {
        width: 200px;
        margin: auto;
      }
      a {
        color: #2671bd;
      }
    `}</style>
  </div>
)

export default Footer