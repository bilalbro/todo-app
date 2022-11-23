import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser';

export default {
   input: 'src/index.js',
   output: {
      file: 'dist/bundle.min.js',
      format: 'iife'
   },
   plugins: [
      nodeResolve(),
      babel({
         babelHelpers: 'bundled',
         compact: true,
         exclude: 'node_modules/**'
      }),
      commonjs(),
      replace({
         preventAssignment: false,
         'process.env.NODE_ENV': "'production'"
      }),
      terser()
   ]
}