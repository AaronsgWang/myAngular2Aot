import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
    entry: 'app/main-aot.js',
    dest: 'aot/build.js', // output a single application bundle
    sourceMap: true,
    format: 'cjs', // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
    plugins: [
        nodeResolve({ jsnext: true, module: true }),
        commonjs({
            include: ['node_modules/rxjs/**', 'node_modules/immutable/**'],
            namedExports: {
                'node_modules/immutable/dist/immutable.js': [ 'List', 'Iterable', 'Seq', 'Collection', 'Map', 'OrderedMap', 'Stack', 'Set', 'OrderedSet', 'Record', 'Range', 'Repeat', 'is', 'fromJS' ]
            }
        }),
        uglify()
    ]
}