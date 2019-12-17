import { withRouter } from 'next/router'

function Second() {
  return <div>
	Welcome to Next.js!
	<p>This second index page</p>
	</div>
}

export default withRouter(Second)