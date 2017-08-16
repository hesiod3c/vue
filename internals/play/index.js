const load = requireContext => requireContext.keys().map(requireContext);
load(require.context('../../source/', true, /\.story\.js$/));
