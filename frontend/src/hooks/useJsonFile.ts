import { useState, useEffect, useCallback } from 'react';

/**
 * UseJsonFile - hook to load in the information from a JSON file in the public directory. Think of it like Apollo useLazyQuery.
 * @param filename: the name of the file to load. NB not the path - that is dealt with separately
 *
 * @returns [ makeCall, {called, loading, error, data} ]. makeCall actually sets everything in motion - the rest are self explanatory. Before the function has been called, loading, error, and data are undefined.
 */
export const useJsonFile = (filename: string) => {
	const [called, setCalled] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean | undefined>(undefined);
	const [error, setError] = useState<Error | undefined>(undefined);
	const [data, setData] = useState<unknown | undefined>(undefined);

	const makeCall = useCallback(async () => {
		console.log('In makeCall!');
		if (!called) {
			setCalled(true);
		}
		setLoading(true);
		setError(undefined);
		setData(undefined);

		try {
			console.log('Making call');
			const result = await fetch(`/data/${filename}`);
			console.log('Awaiting JSON', result);
			const json = await result.json();

			setLoading(false);
			setData(json);
		} catch (e) {
			console.error(e);
			setLoading(false);
			// @ts-expect-error
			setError(e);
		}
	}, [filename, called]);
	return [makeCall, { called, loading, error, data }];
};
