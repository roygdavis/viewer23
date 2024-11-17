// import './App.css'
import TreeRenderer from './components/TreeRenderer'
import { sampleData } from './data/roy_davis_family_tree_download'

const data = sampleData;

function App() {
  return (
    <>
      <div className='container'>
        <h1>Family Tree</h1>
        <TreeRenderer data={data.trees[0]} />
      </div>
    </>
  )
}

export default App
